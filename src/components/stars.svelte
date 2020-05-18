<script>
    export let size = 1;
    export let color = 'white';
    export let duration = 35;
    export let density = 1 / 3000;
    const count = getStarsCount();

    const numCount = Math.min(2000, count);

    const width = window.innerWidth;
    const height = window.innerHeight;

    const starsDistrib = Array(numCount).fill(0).reduce((acc, curr, i) => {
        const suffix = (i === numCount - 1) ? ';' : ',';
        const x = getRandomInRange(0, width, 3);
        const y = getRandomInRange(0, height, 3);

        const currentStar = `${x}px ${y}px var(--star-color)${suffix} `;

        return acc += currentStar;
    }, '');

    function getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    }

    function getStarsCount(){
        const area = window.innerHeight * window.innerWidth;
        return Math.floor(area * density);
    };
</script>

<style>

    .stars, .stars::after {
        width: var(--star-size);
        height: var(--star-size);
        background: transparent;
        box-shadow: var(--stars-distribution);
    }

    .stars {
        animation: animStar var(--anim-duration) linear infinite;
    }

    .stars::after {
        content: "";
        position: absolute;
        top: calc(var(--anim-height));
    }

    @keyframes animStar {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(calc(-1 * var(--anim-height)));
        }
    }
</style>

<div class="stars" style={
    `
        --star-size: ${size}px;
        --star-color: ${color};
        --stars-distribution: ${starsDistrib};
        --anim-height: ${height}px;
        --anim-duration: ${duration}s;
    `
}></div>