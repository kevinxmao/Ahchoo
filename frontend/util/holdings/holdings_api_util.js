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
        url: `api/holdings/${holdingId}`,
        data: {holding}
    })
)

export const removeHolding = (holdingId) =>
  $.ajax({
    method: "DELETE",
    url: `api/holdings/${holdingId}`,
  });