/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 * 
 * v1.2.0
 * MIT License
 */

/* Configs */
/**
 *
 * url - Cluster http url
 * index_name - Index name or comma-separated list
 * type - Type
 * size - Number of results to display at a time when pagination is enabled.
 * search_delay - Delay between actual search request in ms. Reduces number of queries to cluster by not making a request on each keystroke. 
 */

var host = {
	url: "https://3vxc6ao99s:hvivsagghw@media-9434941565.us-west-2.bonsaisearch.net",
	index_name: "media",
	type: "book",
	size: 10,
	search_delay: 500
}
