<script lang="ts">
</script>

<div class="max-w-3xl mx-auto my-12">
	<h1 class="text-4xl font-bold mb-12">Create a new post</h1>

	<form method="post" class="flex flex-col gap-4">
		<div class="form-control">
			<label for="title" class="label">Title</label>
			<input
				type="text"
				name="title"
				placeholder="Some amazing title..."
				class="input w-full"
			/>
		</div>

		<div>
			<label for="body" class="label">Body</label>
			<textarea
				name="body"
				class="textarea w-full"
				placeholder="Enter the story of a lifetime..."
				rows="4"
			/>
		</div>

		<button type="submit" class="btn btn-primary">Post</button>
	</form>
</div>
