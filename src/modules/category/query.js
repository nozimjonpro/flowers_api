const GETCATEGORY = `

select 
c.*,
json_agg(p.*) as products
from categories as c
left join products as p on p.category_id = c.category_id
where c.status = 'active' and case 
                               when $1 > 0 then c.category_id = $1
                               else true
                            end
group by c.category_id;

`
const GETIMG = `

select * from images;

`

const POSTCATEGORY = `
insert into categories (category_name) values($1) returning category_id, category_name

`

const DELETECATEGORY = `
update categories
set status = 'deleted'
where category_id = $1
returning * 
`

const PUTCATEGORY = `
update categories set category_name = $2
where status = 'active' and category_id = $1
returning * 
`

module.exports = {GETCATEGORY, GETIMG, POSTCATEGORY, DELETECATEGORY, PUTCATEGORY}