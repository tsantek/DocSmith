##Galvanize Q3 project Resume Builder


### GitHub Workflow

// Creat new feature branch
git checkout -b new-feature
*Code new feature*
git add -A
git commit -m "New feature"
// Update master branch
git checkout master
git pull
// Update feature branch with master changes
git checkout new-feature
git merge master
*Fix conflicts*
git add -A
git commit
git push
// GitHub Pull request
1. Go to feature
2. Create and Send Pull request
3. Merge Pull request
4. Delete new-feature branch
