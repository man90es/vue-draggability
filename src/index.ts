type vueRef = {
	value: any
}

export function useDraggability(dragElement: vueRef, dragHandle = dragElement) {
	let position: [number?, number?] = [undefined, undefined]
	let cursorPosition: [number?, number?] = [undefined, undefined]

	function mouseDownHandler(event: MouseEvent) {
		if (position.includes(undefined)) {
			const computedStyle = getComputedStyle(dragElement.value)

			position = [
				parseInt(computedStyle.getPropertyValue("left")) || 0,
				parseInt(computedStyle.getPropertyValue("top")) || 0,
			]
		}

		cursorPosition = [ event.clientX, event.clientY ]
		document.addEventListener("mousemove", dragHandler)
		document.addEventListener("mouseup", mouseUpHandler)
	}

	function mouseUpHandler() {
		document.removeEventListener("mousemove", dragHandler)
		document.removeEventListener("mouseup", mouseUpHandler)
	}

	function dragHandler(event: MouseEvent) {
		position = [
			(position[0] || 0) + event.clientX - (cursorPosition[0] || 0),
			(position[1] || 0) + event.clientY - (cursorPosition[1] || 0),
		]

		const computedStyle = getComputedStyle(dragElement.value)
		const transform = [
			(position[0] || 0) - parseInt(computedStyle.getPropertyValue("left")),
			(position[1] || 0) - parseInt(computedStyle.getPropertyValue("top")),
		]
		dragElement.value.style.transform = `translate(${transform[0]}px, ${transform[1]}px)`

		cursorPosition = [ event.clientX, event.clientY ]
	}

	dragHandle.value.addEventListener("mousedown", mouseDownHandler)

	return {
		reset: () => {
			position = [undefined, undefined]
			cursorPosition = [undefined, undefined]
			delete dragElement.value.style.transform
		}
	}
}
