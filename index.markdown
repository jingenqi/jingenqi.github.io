---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---


<div id="image-container" style="text-align: center;"></div>

<!-- JavaScript -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const img = document.createElement('img');
        img.src = '{{ "./images/100_3063.JPEG" | relative_url }}';
        img.alt = 'Personal Image';

        img.style.width = '570px';
        img.style.height = '480px';
        img.style.borderRadius = '0'; 
        
        document.getElementById('image-container').appendChild(img);
    });
</script>