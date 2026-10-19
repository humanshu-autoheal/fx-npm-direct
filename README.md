# fx-npm-direct

Test fixture for an Autoheal vulnerability-remediation agent. Nothing here is production code.

- **Setup:** `lodash` is pinned to `4.17.20` (CVE-2021-23337, CVE-2020-28500; fixed in `4.17.21`).
- **Reachable:** `src/index.js` calls `_.template`, the vulnerable function.
- **Expected agent outcome:** a pull request that bumps `lodash` to `4.17.21` (patch), regenerates `package-lock.json`, and keeps `npm test` green.
