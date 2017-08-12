ActiveAdmin.register Project do
  permit_params :title, :descriptions, :started_at, :web_url, :image_url
end