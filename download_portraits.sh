#!/bin/bash
set -e

# Team members
curl -sL -A "Mozilla/5.0" -o public/team/clara.jpg "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/team/bambang.jpg "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/team/dewi.jpg "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"

# Testimonials customers
curl -sL -A "Mozilla/5.0" -o public/avatars/hendra.jpg "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/avatars/maya.jpg "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/avatars/budi.jpg "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/avatars/kevin.jpg "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/avatars/michelle.jpg "https://images.unsplash.com/photo-1594824813735-a927fa11c52b?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/avatars/stephanie.jpg "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/avatars/samuel.jpg "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
curl -sL -A "Mozilla/5.0" -o public/avatars/irwan.jpg "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"

ls -la public/team/ public/avatars/
