#!/bin/bash
WA='<a href="https://wa.me/919495768129" target="_blank" style="position:fixed;bottom:20px;right:20px;z-index:9999;background:#25D366;color:white;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.6rem;box-shadow:0 4px 20px rgba(37,211,102,0.4);text-decoration:none;" title="Chat on WhatsApp">💬</a>'
for f in index.html packages.html flight.html ship.html gallery.html contact.html; do
  sed -i "s|</body>|$WA\n</body>|g" "$f"
done
echo "Done!"
