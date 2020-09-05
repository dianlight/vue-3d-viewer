/**
 * @fileoverview Unified File Parser
 */

//Imports
import {BufferGeometry, Color, Float32BufferAttribute, Mesh, MeshPhongMaterial} from 'three';
import {Unified3dLoader} from 'unified-3d-loader';

//Export
export default async (data, format, theme) =>
{
  //Load and parse the file
  const loader = new Unified3dLoader();
  const files = await loader.load(data, format, {
    index: {
      normals: false,
      vertices: false
    }
  });

  //Create meshes
  const meshes = [];
  for (const file of files)
  {
    //Triplicate normals
    const normals = [];
    for (let i = 0; i < file.normals.length; i += 3)
    {
      const vector = [
        file.normals[i],
        file.normals[i + 1],
        file.normals[i + 2]
      ];

      normals.push(...vector, ...vector, ...vector);
    }

    //Create the geometry
    const geometry = new BufferGeometry();
    geometry.setAttribute('normal', new Float32BufferAttribute(normals, 3));
    geometry.setAttribute('position', new Float32BufferAttribute(file.vertices, 3));

    //Create the material
    const material = new MeshPhongMaterial({
      color: new Color(theme.primary),
      specular: 0x111111,
      shininess: 200,
    });

    //Create the mesh
    const mesh = new Mesh(geometry, material);

    meshes.push(mesh);
  }

  return meshes;
};