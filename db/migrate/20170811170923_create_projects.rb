class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.column :title, :string, :limit => 32, :null => false
      t.column :description, :text
      t.column :started_at, :timestamp
      t.column :web_url, :text
      t.column :image_url, :text

      t.timestamps
    end
  end
end
