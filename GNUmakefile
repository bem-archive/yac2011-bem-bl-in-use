.PRECIOUS: branches
branches:
	for branch in `git branch -a | grep remotes | grep -v HEAD | grep -v first`; do \
	    git branch --track $${branch##*/} $$branch \
	done

.PRECIOUS: clean
clean:
	git clean -d -f
	git checkout -f

.PRECIOUS: next
next: clean
	git checkout pages

.PHONY: all next clean branches
