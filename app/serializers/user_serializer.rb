class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :total_run_time, :total_run_distance, :average_pace, :token, :furthest_run, :longest_run, :fastest_run, :average_duration, :average_distance

  def furthest_run
    ## return -1 if ....
    if object.runs.length > 0
      object.runs.map{|run| run.distance}.max
    else
      -1
    end #if end
  end #def end

  def total_run_distance
    if object.runs.length != 0
      object.runs.map{|run| run.distance}.reduce(:+)
    else
      -1
    end
  end

  def average_distance
    if object.runs.length !=0
      avg = 0
      avg = total_run_distance/object.runs.length
      avg.round(2)
    else
      -1
    end
  end

  def average_pace
    total_run_time/total_run_distance
  end

  def longest_run
    if object.runs.length !=0
   object.runs.map{|run| run.time}.max
    else
      -1
    end
  end

  def total_run_time
    if object.runs.length != 0
      object.runs.map{|run| run.time}.reduce(:+)
    else
      -1
    end
  end

  def average_duration
    if object.runs.length !=0
      total_run_time/object.runs.length
    else
      -1
    end
  end

  def fastest_run
    if object.runs.length !=0
      object.runs.map{|run| run.speed}.min
    else
      -1
    end
  end

  def average_pace
    if object.runs.length !=0
      pace = 0
      pace = object.runs.map{|run| run.speed}.reduce(:+)/object.runs.length
      pace.round(2)
    else
      -1
    end
  end
end
