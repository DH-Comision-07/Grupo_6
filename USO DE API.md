# USO DE LA API

## USUARIOS:
- api/users/ : devuelve un objeto literal con count (cantidad de usuarios guardados) y users (array con coleccion de usuarios, incluyendo id, name, email y detail (url de detalles))
- api/users/:id : devuelve un objeto literal con informacion de un usuario, incluyendo id, name, lastname, username, email y img (url a imagen de perfil)

## PRODUCTOS:
- api/products/ : devuelve un objeto literal con count (cantidad de productos), countByCategory (total por categoria) y products (productos incluyendo id, name, description, sizes, y detail (url de detalle))
- api/products/:id : devuelve un objeto literal con informacion de un producto, incluyendo id, name, materials, care, description, price, discount, final_price, product_id, visibility, new_release, on_sale, sales_amount, units_sold, category_id, image_url, colors y sizes.