class CreateRuns < ActiveRecord::Migration
  def change
    create_table :runs do |t|
      t.decimal :distance
      t.integer :time
      t.decimal :speed
      t.integer :rating
      t.text :comment

      t.timestamps null: false
    end
  end
end
