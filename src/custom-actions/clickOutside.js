/**
 * identify clicking outside of target element,
 * and fire a custom 'click_outside' event.
 *
 * usage:
 * import clickOutside from '.../clickOutside.js';
 * <Element use:clickOutside on:click_outside={handler} />
 */
export default function clickOutside(node){

    function handleClick(ev){
        // !contains - make sure clicked element is not target or it's children
        if(node && !node.contains(ev.target) && !ev.defaultPrevented){

            // create and dispatch a custom event on target element
            const customEvent = new CustomEvent('click_outside', node);
            node.dispatchEvent(customEvent);
        }
    }

    // detect click
    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}