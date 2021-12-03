/* eslint-disable max-len */


// We have an Array of object called MeshCategoriesToDoctorSpecialties contains a set of objects each object have a mesh code with it is connected specialties
// implement a function with name getConnectedSpecialties this function takes mesh codes array as input and return array of specialties as output
// if 2 mesh codes have the same specialties return the specialties with the max accuracy

// input ['D07', 'G02', 'A01'];
// expected output = [{ specialtyId: 5, accuracy: 0.14 },
//                   { specialtyId: 3, accuracy: 0.30 },
//                   { specialtyId: 1, accuracy: 0.10 },
//                   { specialtyId: 2, accuracy: 0.15 }];


const meshCategoryDoctorSpecialties = [
  {
    meshCode: 'A01',
    specialties: [
      {
        specialtyId: 1,
        accuracy: 0.10,
      },
      {
        specialtyId: 2,
        accuracy: 0.15,
      },
    ],
  },
  {
    meshCode: 'B01',
    specialties: [
      {
        specialtyId: 3,
        accuracy: 0.13,
      },
    ],
  },
  {
    meshCode: 'E04',
    specialties: [
      {
        specialtyId: 4,
        accuracy: 0.17,
      },
    ],
  },
  {
    meshCode: 'D07',
    specialties: [
      {
        specialtyId: 3,
        accuracy: 0.22,
      },
      {
        specialtyId: 5,
        accuracy: 0.14,
      },
    ],
  },
  {
    meshCode: 'G02',
    specialties: [
      {
        specialtyId: 3,
        accuracy: 0.30,
      },
    ],
  },
];

