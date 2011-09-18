BRANCHES=$(shell git branch -a | grep remotes | grep -v HEAD | grep -v pages)

.PHONY: branches
branches:
	for branch in $(BRANCHES); do \
		git branch --track $${branch##*/} $$branch; \
	done

.PRECIOUS: clean
clean:
	git clean -d -f
	git checkout -f

.PRECIOUS: next
next: clean
	git checkout make

.PHONY: next clean branches
