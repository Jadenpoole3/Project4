class CreateActionItems < ActiveRecord::Migration[5.1]
  def change
    create_table :action_items do |t|
      t.string :content
      t.boolean :active
      t.string :name

      t.timestamps
    end
  end
end
