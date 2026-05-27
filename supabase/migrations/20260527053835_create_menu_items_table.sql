-- Lệnh tạo bảng chứa thực đơn món ăn vặt
create table public.menu_items (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  name text not null,
  price int8 not null,
  category text not null,
  image_url text null,
  is_available bool not null default true,
  constraint menu_items_pkey primary key (id)
);

-- Nạp sẵn 2 món ăn mẫu thực tế để app có dữ liệu chạy ngay
insert into public.menu_items (name, price, category, image_url)
values 
('Bánh tráng trộn', 25000, 'Đồ ăn vặt', 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500'),
('Trà sữa trân châu', 30000, 'Trà sữa & Nước', 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=500');