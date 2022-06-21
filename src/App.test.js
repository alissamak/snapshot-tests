import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import GitHubCard from './components/GitHubCard';

test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot()
    
});

// test('renders a snapshot', () => {
//   const tree = renderer.create(<App/>).toJSON()
//   expect(tree).toMatchSnapshot()
  
// });

beforeEach(()=> {
    //sorts eveyrthing back to initial state before each test
    fetch.resetMocks();
})

test('fetch gitHub profile name from GitHub REST API using jest fetch mock', async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'Alissa M'}))
    render(<App/>)
    const gitHubName = await waitFor(() => screen.getByRole('Card.Title'))
    expect(gitHubName).toHaveTextContent('Alissa M')
})

test('check correct URL is fetched from Github REST API with jest fetch mock', async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url:'https://api.github.com/users/alissamak'}))
    render(<App/>)
    const gitHubURL = await waitFor(() => screen.getByRole('link'))
    expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
})

//bonus
test('check if github profile image has correct src sttribute fetched from Github REST API', async () => {
    fetch.mockResponseOnce(JSON.stringify({avatar_url:'https://avatars.githubusercontent.com/u/96849455?v=4'}))
    render(<App/>)
    const avatarURL = await waitFor(() => screen.getByAltText('Github profile image'))
    expect(avatarURL).toHaveAttribute('src', expect.stringContaining('githubusercontent'))
})