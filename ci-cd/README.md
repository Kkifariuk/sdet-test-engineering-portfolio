## CI / CD Integration

This module demonstrates how automated tests are integrated into
a CI pipeline using GitHub Actions.

### Pipeline strategy
- API tests execute first (fast feedback)
- UI tests run in parallel
- Test reports and artifacts are preserved
- Fail-fast behavior for critical failures

### Design focus
The pipeline is optimized for signal quality, speed,
and developer trust in test results.

