class CreateActionItems < ActiveRecord::Migration[5.1]
  def change
    create_table :action_items do |t|
      t.string :content
      t.boolean :active
      t.string :name
      t.references :goal, foreign_key: true

      t.timestamps
    end
  end
end
