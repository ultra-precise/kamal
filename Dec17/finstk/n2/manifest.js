{
    "name": "Finance News",
    "description": "Show Latest Finance News",
    "version": "1.0",
    "manifest_version": 2,


"permissions": [
    "*://finviz.com/*", 
	"*://www.finviz.com/*"
  ],


"content_scripts": [
   {
     "matches": ["https://www.google.com/?q=plugin+enabled"],
     "run_at": "document_idle",
     "js": ["f.js"]
   },
   
   {
     "matches": [
	 "*://finviz.com/*", 
	 "*://www.finviz.com/*"],
     "run_at": "document_idle",
     "js": ["s.js"]
   }
   
    
 ]
}
