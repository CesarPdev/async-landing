const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL09-8XrcuqPcKTlmdIhooDnzD6Nga3cQ3&part=snippet&maxResults=5';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3770286839mshb237ff3bbe3506ep14a194jsn06fd35851e77',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        alert(error);
    }
})();