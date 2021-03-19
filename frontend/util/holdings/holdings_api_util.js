export const fetchHoldings = () => (
    $.ajax({
        method: 'GET',
        url: 'api/holdings'
    })
)

export const fetchHolding = holdingId => (
    $.ajax({
        method: 'GET',
        url: `api/holdings/${holdingId}`
    })
)

export const createHolding = holding => (
    $.ajax({
        method: 'POST',
        url: 'api/holdings',
        data: {holding}
    })
)

export const updateHolding = holding => (
    $.ajax({
        method: 'PATCH',
        url: `api/holdings/${holding.id}`,
        data: {holding}
    })
)

export const deleteHolding = (holdingId) =>
  $.ajax({
    method: "DELETE",
    url: `api/holdings/${holdingId}`,
  });