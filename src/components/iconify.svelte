<script>
    import Iconify from '@iconify/iconify';

    export let icon = 'logos:svg';
    export let inline = true;
    export let style = {};
    export let height = null;

    const styleString = typeof style === 'string' ? style : parseStyle(style);

    function parseStyle(styleObj){
        return Object.entries(styleObj).map(([k, v]) => `${toKebabCase(k)}:${v}`).join(';');
    }

    function toKebabCase(str){
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }

    setTimeout(() => {
        const self = document.querySelectorAll(`[data-icon="${icon}"]`)[0];
        self.style.setProperty('vertical-align', '-0.2em');
    }, 50);
</script>

<iconify-icon data-icon={icon}
                data-inline={inline}
                data-align="bottom"
                data-height={height}
                style={styleString}>
</iconify-icon>