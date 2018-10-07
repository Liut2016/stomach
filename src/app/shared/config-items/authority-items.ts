const roles = ['super', 'community', 'doctor', 'patient'];
const interactions = {
    'sendMessage': [
        [-1, 1, -1, -1],
        [1, -1, 1, -1],
        [-1, 1, 1, -1],
        [-1, -1, 1, -1]
    ],
    'delelteUser': [
        [-1, 1, 1, 1],
        [-1, -1, 1, 1],
        [-1, -1, -1, 1],
        [-1, -1, -1, -1]
    ],
    'createUserAccording2Role': [
        [-1, 1, 1, 1],
        [-1, -1, 1, 1],
        [-1, -1, -1, 1],
        [-1, -1, -1, -1]
    ]
};
const functions = ['survey', 'staff'];
const functionsForRoles = {
    'super': ['survey', 'staff'],
    'community': ['survey', 'staff'],
    'doctor': ['survey'],
    'patient': ['survey']
};
export const RoleConfiguration = {
    roles,
    interactions,
    functions,
    functionsForRoles
};

