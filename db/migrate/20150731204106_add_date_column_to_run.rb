class AddDateColumnToRun < ActiveRecord::Migration
  def change
    add_column :runs, :date, :date
  end
end
