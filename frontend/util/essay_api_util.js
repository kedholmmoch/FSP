
// may have to add a (data) param in here when I need to filter by user or other qualifications...

export const fetchEssays = data => (
    $.ajax({
        method: 'GET',
        url: 'api/essays',
        data,
    })
);

export const fetchEssay = id => (
    $.ajax({
        method: 'GET',
        url: `api/essays/${id}`,
    })
);

export const postEssay = essay => (
    $.ajax({
        method: 'POST',
        url: `api/essays`,
        data: {essay},
    })
);

export const updateEssay = essay => (
    $.ajax({
        method: 'PATCH',
        url: `api/essays/${essay.id}`,
        data: {essay},
    })
)

export const deleteEssay = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/essays/${id}`,
    })
);