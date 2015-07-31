class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.decimal :distance
      t.integer :time
      t.decimal :speed

      t.timestamps null: false
    end
  end
end
