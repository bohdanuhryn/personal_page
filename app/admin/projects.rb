ActiveAdmin.register Project do
  permit_params :title, :description, :started_at, :web_url, :image_url
end