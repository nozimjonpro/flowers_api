

const GETBANNERS = `
   select * from banners  where status = 'active' and case 
                                                    when $1 > 0 then banner_id = $1
                                                    else true
                                                 end


`

const POSTBANNERS = `
   insert into banners(banner_image) values($1) returning *
`

const DELETEBANNERS = `
   update banners set status = 'deleted' where banner_id = $1 returning *
`
const PUTBANNERS = `
   update banners set banner_image = $2 where banner_id = $1 returning * 
`

module.exports = {
    GETBANNERS, POSTBANNERS, DELETEBANNERS, PUTBANNERS
}