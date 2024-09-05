# Target to run clean and then copy
all: clean copy

# Remove the moji.bobplugin directory
clean:
	rm -rf moji.bobplugin

# Create moji.bobplugin directory and copy contents of src into it
copy:
	mkdir -p moji.bobplugin
	cp -R src/* moji.bobplugin/

# Declare phony targets
.PHONY: all clean copy
