class CreateAchievements < ActiveRecord::Migration[5.2]
  def change
    create_table :achievements do |t|
      t.text:content
      t.string :date
      t.user_id :integer

      t.timestamps
    end
  end
end
