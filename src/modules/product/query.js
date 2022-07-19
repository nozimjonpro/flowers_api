const GETPRODUCTS = `
select 
p.* ,
json_agg(i.*) as images
from products as p 
left join images as i on i.product_id = p.product_id
where p.status = 'active' and case 
                               when $1 > 0 then p.product_id = $1
                               else true
                              end
group by p.product_id;

`

const POSTPRODUCT = `
insert into products (product_name, description, price, count, category_id) values($1, $2, $3, $4, $5) returning *
`

const DELETEPRODUCT = `
update products 
set status = 'deleted'
where product_id = $1
returning *
`

const PUTPRODUCT = `
update products 
set product_name = $2,
description = $3,
price = $4, 
count = $5
where product_id = $1
returning *

`

const ADDIMAGE = `
insert into images 
(product_id, image) values($1, $2) returning *
`


module.exports = {
    GETPRODUCTS, POSTPRODUCT, DELETEPRODUCT, PUTPRODUCT, ADDIMAGE
}