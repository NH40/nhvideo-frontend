import { type Dispatch, type RefObject, type SetStateAction } from 'react'

import type { HTMLCustomVideoElement } from '../video-player.types'

const SKIP_TIME_SECONDS = 10

export type TSkipTime = 'forward' | 'backward'

export function useOnSeek(
	playerRef: RefObject<HTMLCustomVideoElement | null>,
	bgRef: RefObject<HTMLCustomVideoElement | null>,
	setCurrentTime: Dispatch<SetStateAction<number>>
) {
	const onSeek = (time: number) => {
		if (!playerRef.current) return

		playerRef.current.currentTime = time

		if (bgRef?.current) {
			bgRef.current.currentTime = time
		}

		setCurrentTime(time)
	}

	return {
		onSeek
	}
}
