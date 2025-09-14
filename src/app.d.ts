// See https://kit.svelte.dev/docs/types#app
declare namespace App {
	interface Locals {
		user: { id: string; username: string } | null;
	}
}
