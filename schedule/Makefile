TSS=$(shell find ./ts/ -type f -name '*.ts')
BROWSERIFY=./node_modules/.bin/browserify
WATCHIFY=./node_modules/.bin/watchify
SASS=./node_modules/.bin/sass
SASS_FLAGS=--load-path=node_modules/@fortawesome/fontawesome-free/scss
SASS_BUILD_FLAGS=$(SASS_FLAGS) --no-source-map
SASS_WATCH_FLAGS=$(SASS_FLAGS) --watch
STATIC=html/index.html css/reset.css json/schedule.json

# PRODUCTION ##############################

.PHONY: all
all: index/app.js index/index.html index/reset.css index/main.css index/schedule.json

index/app.js: index $(TSS)
	$(BROWSERIFY) ./ts/app.ts -p tsify -g uglifyify --outfile index/app.js

index/index.html: index html/index.html
	cp html/index.html index/

index/reset.css: index css/reset.css
	cp css/reset.css index/

index/main.css: index scss/main.scss
	mkdir -p index/webfonts
	cp node_modules/@fortawesome/fontawesome-free/webfonts/* index/webfonts/
	$(SASS) $(SASS_BUILD_FLAGS) scss/main.scss index/main.css

index/schedule.json: index json/schedule.json
	jq -c . json/schedule.json > index/schedule.json

index:
	mkdir -p index

# DEVELOPMENT ##############################

.PHONY: watch
watch: watch-ts watch-scss watch-static http-server

.PHONY: watch-ts
watch-ts: index $(TSS)
	$(WATCHIFY) ./ts/app.ts -v -p tsify --outfile index/app.js --debug

.PHONY: watch-scss
watch-scss: index scss/main.scss
	mkdir -p index/webfonts
	cp node_modules/@fortawesome/fontawesome-free/webfonts/* index/webfonts/
	$(SASS) $(SASS_WATCH_FLAGS) scss/main.scss index/main.css

.PHONY: watch-static
watch-static: index $(STATIC)
	cp $(STATIC) index/
	while inotifywait -q -e modify,move_self $(STATIC); do \
		cp $(STATIC) index/;                                \
	done

.PHONY: http-server
http-server: index
	python -m SimpleHTTPServer 8080

.PHONY: clean
clean:
	rm -rfv index/
