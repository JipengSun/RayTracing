This base code of this project is from Prof.Jack Tumblin, which works purely well. All the bugs are originated from my extension.

Bugs of this version:
    1. The reflect Vector seems to be wrong.
    2. Due to bug 1, the recursive reflection and specular light fails to behave normally.
    3. The box shape shows wrong when look it straightly.
    4. All the first 3 bugs makes me doubt there might be something wrong in the World-Model transision matrix.

Implemented Functional points:
    1. Phong Lighting
    2. Recursive reflection
    3. Supersampling and jittering
    4. Scene changing
    5. Texured Geoms with materials: Sphere, Disk, Box, Ground
    6. WebGL preview
    7. Shadows
    8. More lights sources

Futrue Improvements:
    1. Transparency
    2. More complex shapes