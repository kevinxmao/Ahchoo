@holdings.each do |holding|
    json.set! holding.id do
        json.partial! 'api/holdings/holding', holding: holding
    end
end