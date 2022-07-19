

const GETNEWS = `
select * from news
where status = 'active' and case
                                 when  $1 > 0 then news_id = $1
                                 else true
                            end
`

const POSTNEW = `

insert into news(news_image, title, description) values($1, $2, $3) returning *

`

const DELETENEW = `
update news 
set status = 'deleted'
where news_id = $1
returning *
`

const PUTNEW = `

uptdate news 
set title = $2, 
description = $3,
news_image = $4
where news_id = $1
returning *

`



module.exports = {
    GETNEWS, POSTNEW, DELETENEW, PUTNEW
}