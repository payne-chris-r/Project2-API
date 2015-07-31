class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :middle_name
      t.string :dob
      t.string :city
      t.string :state
      t.string :picture
      t.string :description

      t.timestamps null: false
    end
  end
end
