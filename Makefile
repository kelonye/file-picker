build: node_modules components index.js
	@component build --dev

node_modules:
	@npm install

components: component.json
	@component install --dev

clean:
	rm -fr build template.js

.PHONY: clean
