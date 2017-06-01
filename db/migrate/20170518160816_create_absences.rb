class CreateAbsences < ActiveRecord::Migration[5.1]
  def change
    create_table :absences do |t|
      t.integer :employee_id
      t.string :ab_type
      t.date :date

      t.timestamps
    end
  end
end
