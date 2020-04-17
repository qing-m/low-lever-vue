class Vue {
	constructor(options) {
		this.$options = options || {}
		let data  = this._data = options.data || undefined
		this._initData() // 将data绑定到this上
	}

	_initData() {
		const _self = this
		Object.keys(_self.data).forEach((key)=>{
			Object.defineProperty(_self,key,{
				get: () => {
					return _self[key]
				},
				set: (newVal) => {
					_self.data[key] = newVal
				}
			})
		})
	}
}