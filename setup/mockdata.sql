INSERT INTO admins(username, password) VALUES('ali', crypt('112233', gen_salt('bf')));

INSERT INTO categories(category_name) VALUES('qimmat gullar'), ('yovvoyi gullar'), ('xona gullar');

INSERT INTO products(product_name, price, description, count, category_id) VALUES('rayhon gul', 20000, 'rayhon senga uylanaman...', 300, 1), ('cactus', 14000, 'tikonli chiroyli cactuslar...', 500, 2),
('moychechak', 70000, 'har doim hamma uchun sevimli daisy', 340, 3);

INSERT INTO images(image, product_id) VALUES('http://picsum.photos/400', 4), ('http://picsum.photos/400', 4), ('http://picsum.photos/400', 2), ('http://picsum.photos/400', 2), ('http://picsum.photos/400', 3), ('http://picsum.photos/400', 3);

INSERT INTO banners(banner_image) VALUES('http://picsum.photos/400'), ('http://picsum.photos/400'), ('http://picsum.photos/400');