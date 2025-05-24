<template>
	<div class="typesSelectBox">
		<input type="checkbox" :id="type" v-model="isChecked" class="hidden-checkbox" @change="emitChange" />
		<label class="typesSelectBox_label" :for="type" :class="{ 'selected': isChecked }">
			{{ type }}
		</label>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isChecked: false,
		};
	},
	methods: {
		emitChange() {
			this.$emit('update-selection', {
				type: this.type,
				checked: this.isChecked,
			});
		},
	},
};
</script>

<style scoped>
.typesSelectBox_label {
  font-size: 16px;
  color: #e0e0e0;
  cursor: pointer;
  user-select: none;
  display: inline-block;
  transition: color 0.3s ease, font-weight 0.3s ease;
}

/* При активном состоянии */
.typesSelectBox_label.selected {
  color: #ffcc00;
  font-weight: bold;
}

/* Прячем чекбокс */
.hidden-checkbox {
  display: none;
}
</style>
