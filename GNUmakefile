BRANCHES=$(shell git branch -a | grep remotes | grep -v HEAD | grep -v first)

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
	git checkout pages

.PHONY: next clean branches
